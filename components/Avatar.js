export const Avatar = ({ url, className }) => {
  return (
    <img
      src={url}
      alt="profile-pic"
      loading="lazy"
      className={`rounded-full h-10 w-11 transition duration-150
       transform hover:scale-110 cursor-pointer ${className} `}
    />
  );
};
