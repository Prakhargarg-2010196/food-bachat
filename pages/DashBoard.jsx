import Navbar from "../components/Navbar"
import Table from '../components/Table'
const DashBoard = () => {
  const NavLinks = [
    {
      linkUrl: '/signUpSeller',
      linkText: 'Become a seller',
    },
    {
      linkUrl: '/signUpDonor',
      linkText: 'Become a Food Donor',
    }
  ]
  return (
    
    <div>
      <Navbar Links={NavLinks}></Navbar>
      <div>
          <Table></Table>

      </div>
    </div>
    
  )
}

export default DashBoard