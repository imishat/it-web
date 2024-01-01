import UpdateProduct from "../../../../components/Dashboard/Products/UpdateProduct";
import Layout from "../../../../components/Layout/Layout";
import PrivateRoutes from "../../../../components/Routes/PrivateRoutes";


const Page=async()=> {
  

    return (
        <PrivateRoutes>
            <Layout>
            <UpdateProduct />
        </Layout>
        </PrivateRoutes>
    );
}

export default Page;
