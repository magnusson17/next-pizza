import { logoutAction } from "@/data/actions/auth-actions";

export function LogoutButton() {
    return (
        <form action={logoutAction}>
            <button type="submit">Logout</button>
        </form>
    );
}