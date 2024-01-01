import CreateCategory from "../../../../app/components/Dashboard/Categories/CreateCategory";
import Layout from "../../../../app/components/Layout/Layout";
import PrivateRoutes from "../../../../app/components/Routes/PrivateRoutes";

function Page() {
    return (
      <PrivateRoutes>
          <Layout>
            <CreateCategory />
        </Layout>
      </PrivateRoutes>
    );
}

export default Page;