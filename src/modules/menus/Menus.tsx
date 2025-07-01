import MenusCard from "@/modules/menus/components/MenusCard";
import BackButton from "@/shared/components/ui/backbutton/BackButton";
import SearchInput from "@/shared/components/ui/forms/inputs/SearchInput";

const Menus = () => {
  return (
    <div className='container flex flex-col gap-4 py-4 mx-auto'>
      <BackButton title='menus' />
      <SearchInput />
      <MenusCard />
    </div>
  );
};

export default Menus;