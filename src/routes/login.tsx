import { createFileRoute } from "@tanstack/react-router";
import { LoginView } from "../features/authentication/components/login_view";
export const Route = createFileRoute("/login")({
  component: () => <LoginView />,
});
