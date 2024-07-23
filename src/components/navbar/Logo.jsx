import logo from "@/assets/logo.png";

export default function Logo() {
  return (
    <a className="flex items-center " href="/">
      <img src={logo} alt="logo" width={130} height={130} className="" />
    </a>
  );
}
