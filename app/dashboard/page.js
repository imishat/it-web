import Dashboard from "../../app/components/Dashboard/Dashboard";
import Layout from "../../app/components/Layout/Layout";
import PrivateRoutes from "../../app/components/Routes/PrivateRoutes";

function Page() {
  return (
    <PrivateRoutes>
      <Layout>
        <Dashboard />
      </Layout>
    </PrivateRoutes>
  );
}

export default Page;
