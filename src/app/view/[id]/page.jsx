import EditForm from "@/components/editForm/EditForm";

const getDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/empdata/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get Data");
    }

    return res.json();

  } catch (error) {
    console.log(error);
  }
};


const edit = async ({ params }) => {
  const { id } = params;
  const { empdata } = await getDataById(id);
  const { empid, empname, email, contact } = empdata;
  
  console.log(empdata);
  console.log(`id is`, id);
  return (
    <EditForm id={id} empid={empid} empname={empname} email={email} contact={contact} />
  );
};

export default edit;
