export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-files-j4d6",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://27y2f4mlw6.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BN6GW4LGF",
    APP_CLIENT_ID: "5v89ihrc95vpugkec826itp837",
    IDENTITY_POOL_ID: "us-east-1:679c05c6-08fd-48b2-b734-dcf6789ef038",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_Hm4dxtH9YEESXI1HoojQkMKJ009ofjGKAA",
};
