import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { ProfileForm } from "@/components/forms/ProfileForm";
// import { ProfileImageForm } from "@/components/forms/ProfileImageForm";

export default async function Account() {
    const user = await getUserMeLoader();
    const userData = user.data;
    // const userImage = userData?.image;

    return (
        <div className="page page-account">
            <h1 className="title">Account Page</h1>
            <ProfileForm data={userData} className="page-account__form" />
            {/* <ProfileImageForm data={userImage} className="" /> */}
        </div>
    );
}