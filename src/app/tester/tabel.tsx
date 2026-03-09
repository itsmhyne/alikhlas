type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const users: User[] = [
  { id: 1, name: "Ahmad", email: "ahmad@email.com", role: "Admin" },
  { id: 2, name: "Budi", email: "budi@email.com", role: "Editor" },
  { id: 3, name: "Citra", email: "citra@email.com", role: "User" },
  { id: 4, name: "Dewi", email: "dewi@email.com", role: "User" },
];

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold border-b">
              ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold border-b">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold border-b">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold border-b">
              Role
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 border-b">{user.id}</td>
              <td className="px-4 py-3 border-b">{user.name}</td>
              <td className="px-4 py-3 border-b">{user.email}</td>
              <td className="px-4 py-3 border-b">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
