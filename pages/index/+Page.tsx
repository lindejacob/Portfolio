import styles from "./index.module.css";
import { CircleButton } from "../../components/buttons/Buttons";
import arrowDown from "../../assets/arrowDown.svg";
import {
   CircleZoom,
   DarkenScreen,
} from "../../components/circleScrollTransition/CircleScrollTransition";
import CardSlider from "../../components/cardSlider/CardSlider";
import { Card } from "../../components/card/Card";
import fabledCard from "../../assets/fabledCard.svg";

export default function Page() {
   return (
      <>
         <section className={styles.startSection}>
            <div className={styles.titleContainer}>
               <h1>Jacob Mølholt Poulsen</h1>
               <h2>Studying software engineering</h2>
            </div>
            <div className={styles.scrollBtnContainer}>
               <p>Scroll</p>
               <CircleButton
                  imageUrl={arrowDown}
                  imageSize={"50%"}
                  backgroundColor={"var(--highlight-color"}
                  size={"3rem"}
               />
            </div>
            <div className={styles.circleContainer}>
               <CircleZoom
                  effectStart={0}
                  effectEnd={0.18}
                  minScale={0.2}
                  maxScale={1.66}
               />
            </div>
            <DarkenScreen effectStart={0.0} effectEnd={0.18} />
         </section>

         <section className={styles.projectSelectorSection}>
            <div className={styles.header}>
               <div>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="154"
                     height="215"
                     viewBox="0 0 154 215"
                     fill="none"
                  >
                     <path
                        d="M108.528 204.715C109.475 204.148 109.783 202.919 109.215 201.972L99.9632 186.532C99.3954 185.584 98.1671 185.276 97.2196 185.844C96.2721 186.412 95.9643 187.64 96.5321 188.588L104.756 202.312L91.0318 210.536C90.0843 211.104 89.7765 212.333 90.3443 213.28C90.912 214.228 92.1404 214.535 93.0879 213.968L108.528 204.715ZM15.2724 66.694C15.5758 65.6319 14.9608 64.5249 13.8987 64.2215C12.8366 63.9181 11.7297 64.5331 11.4263 65.5952L15.2724 66.694ZM19.1206 47.7474C18.5845 48.7132 18.9329 49.9307 19.8986 50.4668C20.8644 51.0028 22.0819 50.6545 22.6179 49.6887L19.1206 47.7474ZM32.9718 34.1608C33.6584 33.2956 33.5137 32.0376 32.6486 31.3509C31.7834 30.6642 30.5253 30.809 29.8387 31.6741L32.9718 34.1608ZM43.3856 17.7642C42.5258 18.4577 42.391 19.7168 43.0845 20.5766C43.7779 21.4363 45.037 21.5712 45.8968 20.8777L43.3856 17.7642ZM61.0838 12.2021C62.1097 11.7927 62.6094 10.6291 62.2 9.60325C61.7906 8.57737 60.627 8.07763 59.6011 8.48706L61.0838 12.2021ZM76.5159 3.42677C75.4357 3.65773 74.7473 4.7206 74.9783 5.80075C75.2093 6.88091 76.2721 7.56931 77.3523 7.33835L76.5159 3.42677ZM94.2332 4.95887C95.335 4.88017 96.1643 3.92322 96.0856 2.82146C96.0069 1.7197 95.05 0.890338 93.9482 0.969032L94.2332 4.95887ZM111.546 0.916214C110.444 0.843015 109.491 1.67714 109.418 2.77928C109.345 3.88142 110.179 4.83422 111.281 4.90742L111.546 0.916214ZM128.137 7.27395C129.216 7.51001 130.282 6.82664 130.518 5.74759C130.754 4.66854 130.071 3.60243 128.992 3.36637L128.137 7.27395ZM145.866 8.54215C144.841 8.12908 143.676 8.62469 143.263 9.64912C142.85 10.6735 143.345 11.8389 144.37 12.2519L145.866 8.54215ZM19.1137 71.6187C19.9007 70.8436 19.9105 69.5774 19.1355 68.7903C18.3604 68.0033 17.0941 67.9936 16.3071 68.7686L19.1137 71.6187ZM27.3814 57.6922C26.5557 58.426 26.4812 59.6901 27.215 60.5158C27.9487 61.3414 29.2129 61.4159 30.0385 60.6821L27.3814 57.6922ZM42.741 54.1177C43.8253 53.9069 44.5334 52.8571 44.3226 51.7728C44.1118 50.6885 43.0619 49.9804 41.9777 50.1912L42.741 54.1177ZM58.0626 49.8914C56.9636 49.7808 55.983 50.5821 55.8725 51.6811C55.7619 52.7802 56.5632 53.7607 57.6622 53.8713L58.0626 49.8914ZM75.489 58.0931C76.4809 58.579 77.679 58.1688 78.1649 57.1768C78.6508 56.1849 78.2406 54.9868 77.2486 54.5009L75.489 58.0931ZM93.8285 71.1913C93.3578 70.1921 92.1661 69.7637 91.1669 70.2345C90.1677 70.7053 89.7393 71.8969 90.21 72.8961L93.8285 71.1913ZM92.038 93.5834C91.7417 94.6475 92.3641 95.7503 93.4282 96.0466C94.4923 96.3429 95.5951 95.7205 95.8914 94.6564L92.038 93.5834ZM82.1487 113.747C83.0483 113.106 83.2581 111.857 82.6172 110.957C81.9763 110.058 80.7275 109.848 79.8278 110.489L82.1487 113.747ZM60.6334 118.184C59.5431 118.361 58.803 119.388 58.9802 120.479C59.1575 121.569 60.185 122.309 61.2752 122.132L60.6334 118.184ZM39.7508 119.258C40.7425 119.744 41.9407 119.334 42.4271 118.343C42.9135 117.351 42.5039 116.153 41.5122 115.666L39.7508 119.258ZM26.9147 102.519C26.2745 101.619 25.0258 101.408 24.1257 102.049C23.2256 102.689 23.0148 103.937 23.655 104.838L26.9147 102.519ZM13.7169 86.0322C14.1302 87.0565 15.2956 87.5518 16.32 87.1385C17.3443 86.7252 17.8396 85.5598 17.4263 84.5354L13.7169 86.0322ZM6.16373 82.4899C5.71962 83.5012 6.17945 84.6811 7.19081 85.1252C8.20216 85.5693 9.38205 85.1095 9.82617 84.0981L6.16373 82.4899ZM5.19506 100.344C5.34209 99.2495 4.57381 98.2428 3.47907 98.0958C2.38433 97.9488 1.37768 98.7171 1.23066 99.8118L5.19506 100.344ZM1.54623 117.853C1.72971 118.943 2.76143 119.677 3.85066 119.493C4.93988 119.31 5.67414 118.278 5.49066 117.189L1.54623 117.853ZM10.5672 133.343C10.1037 132.34 8.91521 131.903 7.9126 132.367C6.90998 132.83 6.47295 134.019 6.93646 135.022L10.5672 133.343ZM16.1841 150.348C16.8474 151.231 18.1011 151.409 18.9844 150.746C19.8676 150.083 20.046 148.829 19.3827 147.946L16.1841 150.348ZM30.8285 160.737C30.0291 159.975 28.7631 160.005 28.0009 160.805C27.2387 161.604 27.2689 162.87 28.0683 163.633L30.8285 160.737ZM42.8125 175.71C43.7152 176.347 44.9631 176.131 45.5996 175.228C46.2361 174.326 46.0204 173.078 45.1176 172.441L42.8125 175.71ZM61.9851 182.79C61.0119 182.268 59.7994 182.633 59.277 183.607C58.7546 184.58 59.1201 185.792 60.0933 186.315L61.9851 182.79ZM78.3573 195.003C79.3753 195.431 80.5481 194.954 80.9768 193.936C81.4054 192.918 80.9277 191.745 79.9097 191.316L78.3573 195.003ZM98.5335 198.255C97.483 197.913 96.3546 198.488 96.0131 199.538C95.6716 200.589 96.2463 201.717 97.2968 202.059L98.5335 198.255ZM13.9952 75.3617C13.8438 73.1774 14.2635 70.2256 15.2724 66.694L11.4263 65.5952C10.3568 69.3388 9.80788 72.7975 10.0048 75.6383L13.9952 75.3617ZM22.6179 49.6887C25.5286 44.445 29.0444 39.1091 32.9718 34.1608L29.8387 31.6741C25.7682 36.8027 22.132 42.3223 19.1206 47.7474L22.6179 49.6887ZM45.8968 20.8777C48.3809 18.8741 50.9121 17.1442 53.4577 15.7557L51.5423 12.2441C48.7531 13.7655 46.0238 15.6364 43.3856 17.7642L45.8968 20.8777ZM53.4577 15.7557C55.7562 14.5019 58.3099 13.3092 61.0838 12.2021L59.6011 8.48706C56.6956 9.64666 53.9957 10.9059 51.5423 12.2441L53.4577 15.7557ZM77.3523 7.33835C82.6702 6.20127 88.3447 5.37945 94.2332 4.95887L93.9482 0.969032C87.8743 1.40286 82.0155 2.25083 76.5159 3.42677L77.3523 7.33835ZM111.281 4.90742C116.876 5.27899 122.53 6.0472 128.137 7.27395L128.992 3.36637C123.177 2.09434 117.326 1.30006 111.546 0.916214L111.281 4.90742ZM144.37 12.2519C146.981 13.3047 149.556 14.4779 152.085 15.7785L153.915 12.2213C151.273 10.863 148.586 9.63913 145.866 8.54215L144.37 12.2519ZM13.3143 77.0076C15.4637 75.1337 17.3741 73.3318 19.1137 71.6187L16.3071 68.7686C14.6123 70.4376 12.7619 72.1825 10.6857 73.9925L13.3143 77.0076ZM30.0385 60.6821C33.7285 57.4028 37.3956 55.1569 42.741 54.1177L41.9777 50.1912C35.7529 51.4014 31.4557 54.0714 27.3814 57.6922L30.0385 60.6821ZM57.6622 53.8713C59.9848 54.105 62.5138 54.4427 65.2799 54.8916L65.9207 50.9432C63.0882 50.4836 60.4782 50.1344 58.0626 49.8914L57.6622 53.8713ZM65.2799 54.8916C69.0445 55.5025 72.4536 56.6062 75.489 58.0931L77.2486 54.5009C73.8502 52.8362 70.063 51.6155 65.9207 50.9432L65.2799 54.8916ZM90.21 72.8961C93.2483 79.3447 93.9585 86.6865 92.038 93.5834L95.8914 94.6564C98.0783 86.8029 97.261 78.4767 93.8285 71.1913L90.21 72.8961ZM79.8278 110.489C77.1081 112.426 73.9353 114.133 70.2815 115.523L71.7041 119.261C75.6561 117.758 79.134 115.894 82.1487 113.747L79.8278 110.489ZM70.2815 115.523C66.8494 116.829 63.6383 117.695 60.6334 118.184L61.2752 122.132C64.574 121.595 68.0467 120.653 71.7041 119.261L70.2815 115.523ZM41.5122 115.666C35.7047 112.818 30.9107 108.138 26.9147 102.519L23.655 104.838C27.9024 110.809 33.1675 116.028 39.7508 119.258L41.5122 115.666ZM17.4263 84.5354C16.0882 81.2192 14.9241 77.9478 13.8974 74.8676L10.1026 76.1325C11.1469 79.2653 12.3393 82.6181 13.7169 86.0322L17.4263 84.5354ZM10.2773 74.484C8.70482 77.15 7.33611 79.8201 6.16373 82.4899L9.82617 84.0981C10.9324 81.579 12.228 79.0503 13.7227 76.5161L10.2773 74.484ZM1.23066 99.8118C0.409979 105.923 0.552811 111.956 1.54623 117.853L5.49066 117.189C4.56177 111.674 4.42947 106.045 5.19506 100.344L1.23066 99.8118ZM6.93646 135.022C9.3887 140.326 12.5057 145.449 16.1841 150.348L19.3827 147.946C15.8561 143.25 12.8898 138.367 10.5672 133.343L6.93646 135.022ZM28.0683 163.633C30.192 165.657 32.4139 167.628 34.7247 169.541L37.2751 166.459C35.0337 164.604 32.882 162.695 30.8285 160.737L28.0683 163.633ZM34.7247 169.541C37.3417 171.707 40.05 173.762 42.8125 175.71L45.1176 172.441C42.4316 170.547 39.806 168.554 37.2751 166.459L34.7247 169.541ZM60.0933 186.315C66.3941 189.697 72.6132 192.584 78.3573 195.003L79.9097 191.316C74.2609 188.938 68.1575 186.103 61.9851 182.79L60.0933 186.315ZM97.2968 202.059C100.285 203.03 102.705 203.748 104.382 204.224C105.221 204.462 105.875 204.64 106.32 204.759C106.543 204.818 106.714 204.863 106.831 204.893C106.889 204.908 106.934 204.919 106.964 204.927C106.98 204.931 106.991 204.934 107 204.936C107.004 204.937 107.007 204.938 107.009 204.939C107.011 204.939 107.011 204.939 107.012 204.939C107.013 204.94 107.013 204.94 107.013 204.94C107.013 204.94 107.013 204.94 107.013 204.94C107.014 204.94 107.014 204.94 107.5 203C107.986 201.06 107.986 201.06 107.986 201.06C107.986 201.06 107.986 201.06 107.986 201.06C107.986 201.06 107.986 201.06 107.986 201.06C107.986 201.06 107.986 201.06 107.985 201.06C107.984 201.059 107.982 201.059 107.979 201.058C107.973 201.056 107.963 201.054 107.95 201.051C107.925 201.044 107.885 201.034 107.831 201.02C107.724 200.993 107.563 200.95 107.35 200.894C106.924 200.78 106.292 200.608 105.475 200.376C103.841 199.912 101.469 199.209 98.5335 198.255L97.2968 202.059Z"
                        fill="#FF6331"
                     />
                  </svg>
                  <p>Click to see project</p>
               </div>
               <h2>Projects of interest</h2>
            </div>
            <div className={styles.projectSelector}>
               <CardSlider>
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                  />
                  <Card
                     paperclipBool={false}
                     image={fabledCard}
                     altText={"Fabled"}
                  />
               </CardSlider>
            </div>
         </section>
      </>
   );
}
