import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Cancellationrefund.module.scss";



const Cancellationrefund = () => {

    const form = useRef();

    return (
        <section>
          <div className={`container ${styles.contact}`}>
            <h1>Return, Cancellation and Refund Policy</h1>
            <div className={styles.section}>
             
    
              <div className={styles.details}>
                <Card cardClass={styles.card2}>
                  <h2>Return Policy:</h2>
                 
                  <p >1.Customers can initiate return using  Website, and Mobile Site.</p>
                 < p >2.Customers can initiate return within 30 days from Order Delivery.</p>

           

                <h2>Cancellation Policy:</h2>
            
                  <p>1.You can cancel an order by clicking on the Cancel link/button.</p>
                  <p >2.You will be able to cancel an order till the time it is dispatched from the seller. In case you are unable to cancel an order from the app or website, you can reject the order at doorstep.</p>


                <h2>Refund Policy:</h2>
                <h3>Refund against Cancellation:</h3>
                 
                  <p>Customers shall get Refund against Cancellation of Order or any failed payment by way of credit to the original mode of payment - Credit/Debit Card, or Net banking or Third Party Wallet.</p>
          
                <h3>Refund against Return:</h3>

                  <p>1.In case of Cash on Delivery (COD) orders, customers can choose to get their refund on Return(s) through one of the below options. The refund shall be initiated within 5 days from the date of return pickup.</p>
                  <p>2.Refund credited to the Bank Account entered by the customer at the time of initiating the return request.</p>
                  <p>3.In case the payment is made by Credit/Debit Card, Net Banking or Third Party Wallet, you may get the refund within 7 to 15 working days. Kindly note that there may be delays in refund as they're handled by the Bank.</p>
                  <p>4.In case of any query related to refund, please call our customer service desk at 7019048203 or email us at Support@eshop.com</p>
                
                </Card>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Cancellationrefund