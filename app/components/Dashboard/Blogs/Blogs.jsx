import Products from "../Products/Products";

function Blogs() {
    const tableData = {
        type:'Blogs',
        data:[

        {
            id:1,
          title: "Material XD Version",
          price: "123",
        },
        {
            id:2,
          title: "Add Progress Track",
          price: "123",
        },
        {
            id:3,
          title: "Fix Platform Errors",
          price: "123",
        },
        {
            id:4,
          title: "Launch our Mobile App",
          price: "123",
        },
        {
            id:5,
          title: "Add the New Pricing Page",
          price: "123",
        },
        {
            id:6,
          title: "Add the New Pricing Page",
          price: "123",
        },
        {
            id:7,
          title: "Add the New Pricing Page",
          price: "123",
        },
        {
            id:8,
          title: "Add the New Pricing Page",
          price: "123",
        },
        {
            id:9,
          title: "Add the New Pricing Page",
          price: "123",
        },
        ]
    }
    return (
        <div>
            <Products tableData={tableData} />
        </div>
    );
}

export default Blogs;