import CreateProduct from "../../../../app/components/Dashboard/Products/CreateProduct";
import Layout from "../../../../app/components/Layout/Layout";
import PrivateRoutes from "../../../../app/components/Routes/PrivateRoutes";

function Page() {
    return (
       <PrivateRoutes>
         <Layout>
            <CreateProduct />
        </Layout>
       </PrivateRoutes>
    );
}

export default Page;