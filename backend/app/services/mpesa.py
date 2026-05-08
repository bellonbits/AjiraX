import base64
import requests
from datetime import datetime
from app.core.config import settings

class MpesaService:
    def __init__(self):
        self.consumer_key = settings.DARAJA_CONSUMER_KEY
        self.consumer_secret = settings.DARAJA_CONSUMER_SECRET
        self.shortcode = settings.DARAJA_SHORTCODE
        self.passkey = settings.DARAJA_PASS_KEY
        self.base_url = "https://sandbox.safaricom.co.ke" if settings.DARAJA_ENVIRONMENT == "sandbox" else "https://api.safaricom.co.ke"

    def get_access_token(self):
        url = f"{self.base_url}/oauth/v1/generate?grant_type=client_credentials"
        response = requests.get(url, auth=(self.consumer_key, self.consumer_secret))
        return response.json().get("access_token")

    def initiate_stk_push(self, phone_number, amount, callback_url, account_reference="AjiraX Escrow"):
        access_token = self.get_access_token()
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        password = base64.b64encode(f"{self.shortcode}{self.passkey}{timestamp}".encode()).decode()

        headers = {"Authorization": f"Bearer {access_token}"}
        payload = {
            "BusinessShortCode": self.shortcode,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": int(amount),
            "PartyA": phone_number,
            "PartyB": self.shortcode,
            "PhoneNumber": phone_number,
            "CallBackURL": callback_url,
            "AccountReference": account_reference,
            "TransactionDesc": "Payment for Job on AjiraX"
        }

        url = f"{self.base_url}/mpesa/stkpush/v1/processrequest"
        response = requests.post(url, json=payload, headers=headers)
        return response.json()

    def initiate_b2c_payout(self, phone_number, amount, remarks="Payment from AjiraX"):
        access_token = self.get_access_token()
        url = f"{self.base_url}/mpesa/b2c/v1/paymentrequest"
        headers = {"Authorization": f"Bearer {access_token}"}
        
        # Security credential for B2C requires encryption with public key usually
        # In sandbox, it's often a plain password or specific test credential
        payload = {
            "InitiatorName": settings.DARAJA_INITIATOR_NAME,
            "SecurityCredential": settings.DARAJA_INITIATOR_PASSWORD,
            "CommandID": "BusinessPayment",
            "Amount": int(amount),
            "PartyA": settings.DARAJA_B2C_SHORTCODE,
            "PartyB": phone_number,
            "Remarks": remarks,
            "QueueTimeOutURL": f"{settings.API_V1_STR}/payments/timeout",
            "ResultURL": f"{settings.API_V1_STR}/payments/b2c-callback",
            "Occasion": "Freelancer Payout"
        }

        response = requests.post(url, json=payload, headers=headers)
        return response.json()

mpesa_service = MpesaService()
