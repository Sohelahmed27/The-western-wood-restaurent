import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";


const ManageItems = () => {
  const [menu] =useMenu();
  return (
    <div className="w-full">
      <SectionTitle heading={"Manage All Items" } subHeading={"hurry up"}></SectionTitle>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Colo</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {menu.map((item,index) =>  <tr key={item._id}>
        <th>
        {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
              
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          
        </td>
        <td>Purple</td>
        <td>
          <button className="btn btn-ghost btn-xs">Update</button>
        </td>
        <td>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </td>
      </tr> )}
      
    </tbody>
  
 
    
  </table>
</div>
    </div>
  );
};

export default ManageItems;