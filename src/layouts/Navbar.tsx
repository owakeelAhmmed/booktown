import { Link } from 'react-router-dom';
import { Avatar } from '../components/ui/avatar';
import { FaUserGear } from 'react-icons/fa6';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import Cart from '../components/Cart';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { signOut } from 'firebase/auth';
import { Auth } from '@/lib/firebase';
import { setUser } from '@/redux/feature/user/userSlice';
import { useSelector } from 'react-redux';
import { SearchBar } from '@/components/searchBar';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log('logout');
    signOut(Auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div className="text-2xl font-bold">
            <span className="text-red-500 text-3xl">B</span>ook
            <span className="text-blue-500 text-3xl">T</span>own
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">Products</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/addbook">Add New Book</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  {/* <HiOutlineSearch size="25" /> */}
                  <SearchBar />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none ">
                    <Avatar className="rounded-full border border-blue-400 flex justify-center items-center">
                      <FaUserGear className="text-3xl " />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>

                    {!user.email && (
                      <>
                        <Link to="/login">
                          <DropdownMenuItem className="cursor-pointer">
                            LogIn
                          </DropdownMenuItem>
                        </Link>
                        <Link to="/signup">
                          <DropdownMenuItem className="cursor-pointer">
                            SignUp
                          </DropdownMenuItem>
                        </Link>
                      </>
                    )}
                    {user.email && (
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="cursor-pointer"
                      >
                        Logout
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
