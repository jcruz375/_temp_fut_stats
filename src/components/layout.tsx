import Image from 'next/image';

import { Button, Dropdown, Row, Space } from 'antd';
import Link from 'next/link';
import logoImg from '../assets/images/logo_black.png';
import styles from '../styles/layout.module.scss';
import { FiUser, FiChevronDown } from "react-icons/fi";
import type { MenuProps } from 'antd';

interface layoutPropsType {
  children: JSX.Element;
}

export function Layout({ children }: layoutPropsType) {

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    // message.info('Click on menu item.');
    // console.log('click', e);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Minha conta',
      key: '1',
    },
    {
      label: 'Pagamento',
      key: '2',
    },
    {
      label: 'Casas de aposta',
      key: '3',
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Row justify={{ xs: 'center', md: 'start' }} align={'middle'} className={styles.header_main_links}>
          <Link href="/">
            <Image
              src={logoImg}
              alt="logo Futebol Estatístico"
            />
          </Link>
          <nav>
            <Link href="" className='mr-10'>
              <p className='font-serif text-2xl'>
                JOGOS
              </p>
            </Link>
            <Link href="" className='mr-10'>
              <p className='font-serif text-2xl'>
                LIGAS
              </p>
            </Link>
          </nav>
        </Row>
        <nav className={styles.header_secondary_links}>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                <FiUser fontSize={32} />
                <FiChevronDown fontSize={24} />
              </Space>
            </Button>
          </Dropdown>
        </nav>
      </header>
      <Row className='w-full mx-auto px-8 sm:px-52 py-8 sm:py-8'>
        {children}
      </Row>
    </main>
  )
}