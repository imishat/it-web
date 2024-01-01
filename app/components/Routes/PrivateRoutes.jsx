'use client';
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from '../../../context/ContextProvider';
import Layout from "../Layout/Layout";
import Skeleton from "../Loading/Skeleton";

function PrivateRoutes({children}) {
    const router = useRouter()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Layout><div className="grid gap-4 h-32 rounded-xl overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </div>
            <div className="flex mt-6 justify-between gap-4">
            <Skeleton />
            <Skeleton />
            </div>
            </Layout>
    }

    if(!user?.email){
        return router.push('/')
    }else{
       return children
    }
}

export default PrivateRoutes;