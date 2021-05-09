import React, { ReactElement } from "react";
import styles from "./Tableprint.module.css";
interface Props {}

export default function TablePrint({}: Props): ReactElement {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td className={styles.fstitle}>&nbsp;&nbsp;&nbsp;Express</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>
                    &nbsp;&nbsp;&nbsp;เลขที่สินค้า : #12345678910 <br />
                    &nbsp;&nbsp;&nbsp;วันที่จัดส่ง : 01-01-2021
                  </th>
                  <th style={{ width: "50%" }}>
                    &nbsp;&nbsp;&nbsp;จำนวนราคา : 10,000 บาท (COD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tabletr}>
                  <td colSpan={2} className="fw-bold">
                    <br />
                    &nbsp;&nbsp;&nbsp;ผู้ส่ง (SENDER) : XXXXXXXXXXXXXX <br />
                    &nbsp;&nbsp;&nbsp;ที่อยู่ (ADDRESS) : XXXXXXXXXXXXXX <br />
                    &nbsp;&nbsp;&nbsp;เบอร์โทร (ADDRESS) : XXXXXXXXXXXXXX <br />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="fw-bold">
                    <br />
                    &nbsp;&nbsp;&nbsp;ผู้รับ (RECEIVER) : XXXXXXXXXXXXXX <br />
                    &nbsp;&nbsp;&nbsp;ที่อยู่ (ADDRESS) : XXXXXXXXXXXXXX <br />
                    &nbsp;&nbsp;&nbsp;เบอร์โทร (ADDRESS) : XXXXXXXXXXXXXX <br />
                    &nbsp;&nbsp;&nbsp;หมายเหตุ (NOTE) : XXXXXXXXXXXXXX <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
