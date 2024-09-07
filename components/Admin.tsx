import Footer from './Footer';

export default function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow overflow-x-auto">
        <table className="table table-zebra mt-20">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Region</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Puntland</td>
              <td>Cy Ganderton</td>
              <td>22</td>
              <td>john@johndoe.com</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Jubaland</td>
              <td>Hart Hagerty</td>
              <td>45</td>
              <td>john@johndoe.com</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Benaadir</td>
              <td>Brice Swyre</td>
              <td>25</td>
              <td>john@johndoe.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
