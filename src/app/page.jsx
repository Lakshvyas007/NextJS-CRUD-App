import styles from "./page.module.css";
import TableEmp from "@/components/datatable/Table";

export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
         Deorwine Employee List
        </h1>
        <p className={styles.desc}>
          This is an Employee list of Deorwine Infotech
        </p>
      <TableEmp/>
      </div>
  );
}
