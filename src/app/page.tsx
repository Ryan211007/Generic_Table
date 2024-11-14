import EmployeeTable from "@/components/EmployeeTable"; // Pastikan jalur impor sesuai
import Table from "@/components/Table"; // Tambahkan impor untuk Table
import { employees } from "@/data/employee"; // Tambahkan impor untuk employees

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around bg-slate-50">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Non Generic Table</h1>
        <p>Non Generic Table</p>
        <Table columnDefs={[  { title: 'First Name', field: 'firstName' },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Phone', field: 'phone' },
    { title: 'Address', field: 'address' },
    { title: 'Age', field: 'age' },
    { title: 'Email', field: 'email' },
    {
        title: 'Verified',
        render: (rowData) => (rowData.verified ? 'Yes' : 'No')
    }
]} data={employees} />
      </section>
      
      {/* Menambahkan EmployeeTable */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Employee Table (Generic Table)</h1>
        <EmployeeTable />
      </section>
    </main>
  );
}