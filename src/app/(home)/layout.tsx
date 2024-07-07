import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="relative overflow-x-hidden top-20">
        <>{children}</>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
