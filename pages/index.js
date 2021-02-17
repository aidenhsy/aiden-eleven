import styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import { GetCompanyById } from '../graphql/queries';

export default function Home() {
  const { loading, error, data } = useQuery(GetCompanyById, {
    variables: { companyId: 'COMPANY#4160011234' },
  });

  return (
    <div className={styles.container}>
      {data && <h1>{data.getCompanyById.name}</h1>}
    </div>
  );
}
