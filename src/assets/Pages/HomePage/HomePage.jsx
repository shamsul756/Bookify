import React, { Suspense } from "react";
import HeroPage from "../../Components/HeroPage/HeroPage";
import AllBooks from "../../Components/AllBooks";

const HomePage=()=>{

    return(
        <>
   <HeroPage/>
  <Suspense fallback={<p>Loading books...</p>}>
      <AllBooks />
    </Suspense>
        </>
    )
}
export default HomePage;