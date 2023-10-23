import noImg from "/src/assets/img/no-user-image.jpg";

const Profile = () => {
    const auth = JSON.parse(localStorage.getItem("user"));

    // photoURL
    return (
        <div className="w-8 h-8 rounded-full border overflow-hidden">
            <img src={`${auth.providerData[0].photoURL ? auth.providerData[0].photoURL : noImg}`} />
        </div>
    );
};

export default Profile;
