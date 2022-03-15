import { BsFillPersonFill } from 'react-icons/bs';


const Header = () => {
    return (
    <header className='indicator'>
        <div className='navbar bg-primary'>
            <h1 className='text-primary-content'>Daily Progress Update</h1>
            <div className='text-primary-content'>
                <BsFillPersonFill />
                <select className='select select-ghost'>
                    <option disabled selected>Filter by team member</option>
                </select>
            </div>
            <button className='indicator-item indicator-center md:indicator-end indicator-bottom 
                btn-circle btn-accent flex items-center justify-center right-48'>
                +
            </button>
        </div>
    </header>
    ) 
}

export default Header;