import { MyButton } from "../../../shared/components/form/MyButton";
import { MyLogoutButton } from "../../../shared/components/form/MyLogoutButton";
import useAuth from "../hooks/useAuth";

export function LoginView() {
  const { loginWithRedirect } = useAuth();
  return (
    <main className="flex flex-col p-4  h-screen ">
      <header className="flex justify-end"></header>
      <section className="flex flex-col items-center gap-4 mt-10">
        <MyButton color="primary" onClick={() => loginWithRedirect()} size="lg">
          Ingresar
        </MyButton>
        <MyLogoutButton />
      </section>
    </main>
  );
}
