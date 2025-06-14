// components
import Grid from './grid/Grid';
import Header from './header/Header';
import Badge from '../ui/Badge';

const CheatsheetsSection = () => {
    return (
        <section className="w-4/5 mx-auto my-32 space-y-24">
            <Badge size="default" color="#6d11af" shape="pill" className="shadow-xl shadow-purple-100 mx-auto">
                Cheat Sheets
            </Badge>
            <Header />
            <Grid />
        </section>
    );
};

export default CheatsheetsSection;
