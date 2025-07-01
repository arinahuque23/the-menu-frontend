import Auth from "@/modules/auth/Auth";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Auth />
    </div>
  );
};

export default LandingLayout;
