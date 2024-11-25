import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@nextui-org/react";
import { createFileRoute } from "@tanstack/react-router";
import { MyLogoutButton } from "../app/shared/auth/MyLogoutButton";

export const Route = createFileRoute("/login")({
  component: () => <LoginPage />,
});

export function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <main className="flex flex-col p-4  h-screen ">
      <header className="flex justify-end"></header>
      <section className="flex flex-col items-center gap-4 mt-10">
        <Button color="primary" onClick={() => loginWithRedirect()} size="lg">
          Ingresar
        </Button>
        <MyLogoutButton />
      </section>
    </main>
  );
}
