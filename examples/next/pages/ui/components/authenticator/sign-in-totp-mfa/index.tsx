import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsExports from "@environments/auth-with-totp-mfa/src/aws-exports";

Amplify.configure({
  ...awsExports,
  auth: {
    login_mechanisms: ["email"],
  },
});

export default function SignInTotpMfa() {
  return <Authenticator />;
}
