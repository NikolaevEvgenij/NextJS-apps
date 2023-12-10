import LeftSidebar from "@/components/shered/LeftSidebar/LeftSidebar";
import NavBar from "@/components/shered/NavBar/NavBar";
import RightSidebar from "@/components/shered/RightSidebar/RightSidebar";

const Layout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <main className='background-light850_dark100 '>
         <NavBar />

         <div className='flex'>
            <LeftSidebar />
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
               <div className='mx-auto w-full max-w-5xl'>
                  {children}
               </div>
            </section>
            <RightSidebar />
         </div>
      </main>
   );
};

export default Layout;