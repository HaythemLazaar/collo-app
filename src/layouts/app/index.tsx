import SidebarWithHeader from '../../components/reusable/app-sidebar/index';
import PropTypes from 'prop-types';

export const AppLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <SidebarWithHeader>{children}</SidebarWithHeader>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.any,
};
