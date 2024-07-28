import ActionBar from '@/components/ActionBar';
import Navbar from '@/components/Navbar';
export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-20">
            <ActionBar />
            <div className="py-5">
                <Navbar />
            </div>
        </header>
    );
};
