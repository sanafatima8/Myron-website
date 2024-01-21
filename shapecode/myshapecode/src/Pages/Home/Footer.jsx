import { Link as ScrollLink} from "react-scroll";
import { useRef } from "react";
import "./footer.css";
import { useInView } from "react-intersection-observer";



function Footer() {
  
  return (
    <footer className="footer--container">
       <hr class="divider" />
    
        <p className="footer-para">Designed by and Developed by</p>
         <br />
       
        
        <div>
        <svg width="300" height="100" viewBox="0 0 142 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M101.169 34.6338H85.2128C84.9947 34.6338 84.818 34.4458 84.818 34.2131V4.72613C84.818 4.49397 84.9947 4.30535 85.2128 4.30535H101.169C101.635 4.30535 102.08 4.10918 102.408 3.76037C102.765 3.38022 102.924 2.91301 102.924 2.45509C102.924 1.49571 102.225 0.575806 101.169 0.575806H84.8174H84.6419H82.9451C82.0454 0.575806 81.3159 1.35294 81.3159 2.31115V36.6275C81.3159 37.5857 82.0454 38.3628 82.9451 38.3628H84.6419H84.8174H101.169C101.635 38.3628 102.08 38.1666 102.408 37.8178C102.765 37.4377 102.924 36.9705 102.924 36.5125C102.925 35.5538 102.225 34.6338 101.169 34.6338Z" fill="goldenrod"/>
<path d="M91.6268 11.2902H99.4945C99.9599 11.2902 100.405 11.094 100.733 10.7452C101.09 10.3651 101.25 9.89787 101.25 9.43995C101.25 8.48058 100.55 7.56067 99.4945 7.56067H89.3597C88.4599 7.56067 87.7305 8.33838 87.7305 9.2966V19.3343V19.6059V29.6437C87.7305 30.6025 88.4593 31.3796 89.3597 31.3796H99.4945C100.55 31.3796 101.25 30.4597 101.25 29.5003C101.25 29.0424 101.09 28.5752 100.733 28.195C100.404 27.8462 99.9593 27.65 99.4945 27.65H91.6268C91.4081 27.65 91.2326 27.4614 91.2326 27.2287V21.3355H96.263C96.7271 21.3355 97.1726 21.1393 97.5009 20.7893L97.5021 20.7882C98.6053 19.6135 97.8239 17.6048 96.2642 17.6048H91.2326V11.7116C91.2326 11.4788 91.4087 11.2902 91.6268 11.2902Z" fill="goldenrod"/>
<path d="M73.9952 2.35574V36.6262C73.9952 37.6558 73.2115 38.491 72.2447 38.491H72.2441C71.2773 38.491 70.4937 37.6564 70.4937 36.6262V2.35574C70.4937 1.32614 71.2773 0.490967 72.2441 0.490967H72.2447C73.2115 0.490967 73.9952 1.32556 73.9952 2.35574Z" fill="goldenrod"/>
<path d="M66.3448 0.490967C67.7653 0.490967 68.595 2.19787 67.774 3.43293C64.5255 8.32091 58.3697 17.585 58.3697 17.585L57.6531 18.6622C56.9551 19.7115 55.4927 19.7115 54.7953 18.6616L54.0799 17.585L44.6762 3.43293C43.8558 2.19787 44.6849 0.490967 46.1054 0.490967H46.1065C46.6745 0.490967 47.2074 0.784641 47.5357 1.27855L56.1639 14.2635C56.1942 14.3093 56.2578 14.3093 56.2881 14.2635L64.9162 1.27855C65.2439 0.784641 65.7769 0.490967 66.3448 0.490967Z" fill="goldenrod"/>
<path d="M41.9205 2.35574V36.6262C41.9205 37.6558 41.1368 38.491 40.17 38.491H40.1694C39.2026 38.491 38.4189 37.6564 38.4189 36.6262V2.35574C38.4189 1.32614 39.2026 0.490967 40.1694 0.490967H40.17C41.1368 0.490967 41.9205 1.32556 41.9205 2.35574Z" fill="goldenrod"/>
<path d="M67.4557 15.4678V36.6262C67.4557 37.6558 66.672 38.491 65.7052 38.491H65.7047C64.7379 38.491 63.9542 37.6564 63.9542 36.6262V21.5868C63.9542 21.5078 63.8586 21.4753 63.816 21.5398L58.3704 29.7348L57.6538 30.812C56.9558 31.8613 55.4934 31.8613 54.796 30.8114L54.0805 29.7348L48.5982 21.4852C48.5551 21.4208 48.46 21.4527 48.46 21.5322V36.6262C48.46 37.6558 47.6763 38.491 46.7095 38.491H46.709C45.7422 38.491 44.9585 37.6564 44.9585 36.6262V15.4127C44.9585 13.5943 47.1521 12.8514 48.1381 14.3355L48.4606 14.8207L56.164 26.4132C56.1943 26.4591 56.2578 26.4591 56.2882 26.4132L63.9536 14.8758L64.2761 14.3906C65.2621 12.9066 67.4557 13.65 67.4557 15.4678Z" fill="goldenrod"/>
<path d="M88.1145 60.9152H82.6186C82.5433 60.9152 82.4831 60.846 82.4831 60.762V50.0051C82.4831 49.92 82.5444 49.852 82.6186 49.852H88.1145C88.2748 49.852 88.4276 49.7805 88.5417 49.6535C88.6643 49.5151 88.7192 49.3439 88.7192 49.1771C88.7192 48.8267 88.4782 48.4921 88.1145 48.4921H82.482H82.4217H81.8375C81.5277 48.4921 81.2759 48.7756 81.2759 49.125V61.6433C81.2759 61.9927 81.5277 62.2762 81.8375 62.2762H82.4217H82.482H88.1145C88.2748 62.2762 88.4276 62.2048 88.5417 62.0777C88.6643 61.9394 88.7192 61.7681 88.7192 61.6014C88.7192 61.2498 88.4782 60.9152 88.1145 60.9152Z" fill="white"/>
<path d="M84.8274 52.3995H87.5377C87.698 52.3995 87.8508 52.328 87.9648 52.201C88.0875 52.0626 88.1424 51.8913 88.1424 51.7246C88.1424 51.3741 87.9014 51.0396 87.5377 51.0396H84.0474C83.7375 51.0396 83.4868 51.3231 83.4868 51.6724V55.3337V55.4324V59.0936C83.4868 59.443 83.7375 59.7265 84.0474 59.7265H87.5377C87.9014 59.7265 88.1424 59.3908 88.1424 59.0415C88.1424 58.8747 88.0875 58.7035 87.9648 58.5651C87.8519 58.4381 87.698 58.3666 87.5377 58.3666H84.8274C84.7521 58.3666 84.6919 58.2974 84.6919 58.2135V56.0641H86.4241C86.5844 56.0641 86.7372 55.9927 86.8502 55.8645C87.23 55.4358 86.961 54.7031 86.4241 54.7031H84.6908V52.5537C84.6919 52.4675 84.7521 52.3995 84.8274 52.3995Z" fill="white"/>
<path d="M12.1849 49.167V61.5991C12.1849 61.9723 11.9159 62.2751 11.5856 62.2751C11.2542 62.2751 10.9863 61.9723 10.9863 61.5991V49.167C10.9863 48.7938 11.2553 48.491 11.5856 48.491C11.9159 48.491 12.1849 48.7938 12.1849 49.167Z" fill="white"/>
<path d="M9.56518 48.491C10.0515 48.491 10.3355 49.1102 10.0547 49.5583C8.94221 51.331 6.83339 54.6917 6.83339 54.6917L6.58807 55.083C6.34922 55.4641 5.84783 55.4641 5.60898 55.083L5.36366 54.6929L2.14232 49.5594C1.8615 49.1114 2.14555 48.4921 2.63187 48.4921C2.82661 48.4921 3.00845 48.5987 3.12142 48.7779L6.07701 53.4883C6.08777 53.5053 6.10928 53.5053 6.12004 53.4883L9.07563 48.7779C9.18753 48.5976 9.37043 48.491 9.56518 48.491Z" fill="white"/>
<path d="M1.19859 49.167V61.5991C1.19859 61.9723 0.929606 62.2751 0.599295 62.2751C0.267908 62.2751 0 61.9723 0 61.5991V49.167C0 48.7938 0.268984 48.491 0.599295 48.491C0.930682 48.491 1.19859 48.7938 1.19859 49.167Z" fill="white"/>
<path d="M9.94488 53.9239V61.5991C9.94488 61.9723 9.6759 62.2751 9.34559 62.2751C9.0142 62.2751 8.74629 61.9723 8.74629 61.5991V56.1435C8.74629 56.1152 8.71402 56.1027 8.69895 56.1265L6.83436 59.0993L6.58905 59.4906C6.35019 59.8717 5.84881 59.8717 5.60995 59.4906L5.36464 59.1004L3.48714 56.1072C3.47208 56.0834 3.4398 56.0959 3.4398 56.1242V61.5991C3.4398 61.9723 3.17081 62.2751 2.8405 62.2751C2.50912 62.2751 2.24121 61.9723 2.24121 61.5991V53.9034C2.24121 53.2445 2.99221 52.9745 3.33005 53.5121L3.44087 53.6879L6.07906 57.8936C6.08982 57.9106 6.11134 57.9106 6.12209 57.8936L8.74737 53.7084L8.85819 53.5325C9.19388 52.9949 9.94488 53.2637 9.94488 53.9239Z" fill="white"/>
<path d="M20.3381 62.508C20.1305 62.508 19.9755 62.4229 19.8486 62.2392C19.7162 62.0487 19.6495 61.7311 19.6495 61.2955V57.3485L17.3804 52.6641C17.1921 52.2649 17.0565 51.9473 16.9801 51.7261C16.9124 51.531 16.8779 51.3666 16.8779 51.2361C16.8779 51.0331 16.936 50.8607 17.0555 50.7121C17.1749 50.5636 17.3201 50.491 17.4977 50.491C17.6806 50.491 17.8108 50.5511 17.8958 50.6747C18.0173 50.8516 18.2067 51.2203 18.4606 51.7726L20.3747 55.9125L22.3092 51.7749L22.5728 51.1987C22.6385 51.0558 22.7106 50.922 22.7869 50.7995C22.8526 50.6951 22.9247 50.6157 23 50.5624C23.0688 50.5148 23.1581 50.491 23.2668 50.491C23.4368 50.491 23.5681 50.559 23.681 50.7042C23.794 50.8516 23.8489 51.015 23.8489 51.2033C23.8489 51.3779 23.8166 51.5503 23.751 51.7295C23.6767 51.9337 23.5444 52.2241 23.3593 52.5938L21.0321 57.3473V61.2955C21.0321 61.7243 20.9632 62.0396 20.8277 62.2335C20.6986 62.4207 20.5426 62.508 20.3381 62.508Z" fill="white"/>
<path d="M36.6805 62.5081C36.5235 62.5081 36.3976 62.4627 36.2964 62.3697C36.1792 62.2619 36.0759 62.1224 35.9898 61.9546C35.8908 61.7595 35.7531 61.468 35.5809 61.0869L34.8375 59.44C34.5663 58.8252 34.3167 58.3455 34.0983 58.0166C33.8648 57.6661 33.6195 57.42 33.3699 57.2861C33.1246 57.1545 32.818 57.0876 32.4586 57.0876H31.5731V61.2967C31.5731 61.7368 31.5064 62.0555 31.3751 62.2426C31.2482 62.4241 31.0922 62.5081 30.8845 62.5081C30.6596 62.5081 30.5004 62.4218 30.382 62.237C30.254 62.0362 30.1895 61.7198 30.1895 61.2967V51.919C30.1895 51.4664 30.2583 51.1455 30.3939 50.964C30.5262 50.7882 30.7597 50.6997 31.09 50.6997H34.1058C34.5082 50.6997 34.8579 50.7224 35.1441 50.7678C35.4131 50.8109 35.6573 50.8982 35.8693 51.0275C36.1329 51.1749 36.3631 51.3836 36.5611 51.6524C36.7591 51.9213 36.913 52.2388 37.0152 52.5961C37.1195 52.9591 37.1733 53.3492 37.1733 53.7564C37.1733 54.5878 36.999 55.2547 36.6547 55.7402C36.305 56.2336 35.7563 56.592 35.0268 56.8041L34.4405 56.9742L34.9634 57.3451C35.2657 57.5595 35.5605 57.8827 35.8413 58.3069C36.1307 58.7459 36.3933 59.2211 36.6214 59.7179C36.8495 60.2158 37.0302 60.6706 37.1561 61.0687C37.3186 61.5803 37.3358 61.7595 37.3358 61.8128C37.3358 61.9194 37.3089 62.026 37.254 62.1383C37.1981 62.2529 37.1238 62.3402 37.0259 62.4082C36.9302 62.4752 36.8161 62.5081 36.6805 62.5081ZM31.5753 55.9035H33.4721C33.9369 55.9035 34.335 55.8479 34.6578 55.739C35.0085 55.6211 35.284 55.4113 35.4755 55.1164C35.6703 54.8169 35.7682 54.4131 35.7682 53.9141C35.7682 53.5216 35.6907 53.1689 35.539 52.8649C35.3851 52.5587 35.1699 52.3262 34.8988 52.1742C34.6492 52.0347 34.1994 51.9655 33.5227 51.9655H31.5763V55.9035H31.5753Z" fill="white"/>
<path d="M47.8348 62.5081C47.1548 62.5081 46.5394 62.3606 46.0057 62.0714C45.4753 61.7833 45.0277 61.3727 44.6737 60.8499C44.3176 60.3236 44.0432 59.6782 43.8603 58.933C43.6742 58.1776 43.5806 57.3474 43.5806 56.4672C43.5806 55.5655 43.6785 54.7285 43.8721 53.9799C44.0626 53.2404 44.3423 52.603 44.7028 52.0869C45.06 51.5742 45.5022 51.1773 46.0165 50.905C46.5351 50.6306 47.1344 50.4922 47.7971 50.4922C48.6977 50.4922 49.4788 50.7372 50.1201 51.2192C50.756 51.6979 51.2455 52.3909 51.5737 53.2767C51.9072 54.1784 52.0761 55.2582 52.0761 56.4831C52.0761 57.3916 51.9836 58.2264 51.7996 58.9659C51.6178 59.6952 51.3434 60.3349 50.983 60.8669C50.6258 61.3943 50.1803 61.8037 49.6585 62.0839C49.1324 62.3652 48.5191 62.5081 47.8348 62.5081ZM47.7971 51.8657C47.3937 51.8657 47.0139 51.9689 46.6696 52.172C46.3242 52.3773 46.0229 52.6767 45.7744 53.0657C45.5291 53.448 45.3343 53.9391 45.1955 54.5243C45.0589 55.1005 44.989 55.7538 44.989 56.4661C44.989 57.1841 45.0578 57.8431 45.1955 58.4272C45.3354 59.0215 45.5366 59.5251 45.7948 59.9221C46.0552 60.3225 46.3597 60.6287 46.7008 60.8306C47.0418 61.0313 47.4195 61.1334 47.823 61.1334C48.3405 61.1334 48.8236 60.9588 49.2572 60.6139C49.6929 60.268 50.0415 59.7327 50.2955 59.0215C50.5429 58.3274 50.6688 57.4676 50.6688 56.4661C50.6688 55.5395 50.5537 54.7217 50.3267 54.0343C50.0932 53.3289 49.7521 52.7844 49.3131 52.4181C48.872 52.0517 48.362 51.8657 47.7971 51.8657Z" fill="white"/>
<path d="M65.1892 62.508C65.0537 62.508 64.9299 62.4819 64.8234 62.432C64.7201 62.3821 64.6201 62.3004 64.5275 62.1904C64.4243 62.0679 64.3263 61.9205 64.236 61.7526C64.137 61.5689 64.038 61.3806 63.939 61.1878L60.0269 53.2018V61.3874C60.0269 61.7798 59.9634 62.0713 59.8397 62.2539C59.7214 62.4275 59.5804 62.508 59.3953 62.508C59.2028 62.508 59.0607 62.4275 58.9467 62.2539C58.824 62.0679 58.7627 61.7764 58.7627 61.3874V51.9847C58.7627 51.6218 58.7917 51.3394 58.8477 51.1465C58.908 50.9583 59.0091 50.8017 59.1543 50.6758C59.2985 50.5511 59.4491 50.491 59.6138 50.491C59.7429 50.491 59.8526 50.5171 59.9387 50.5692C60.0312 50.6248 60.1098 50.6985 60.1797 50.7949C60.2582 50.9027 60.3422 51.0467 60.4261 51.2214C60.5197 51.4154 60.6165 51.6161 60.7155 51.8271L64.7191 59.8925V51.6104C64.7191 51.2101 64.7782 50.9152 64.8955 50.7348C65.0031 50.5681 65.1397 50.491 65.327 50.491C65.5228 50.491 65.6659 50.5692 65.7745 50.736C65.8929 50.9174 65.9521 51.2112 65.9521 51.6104V61.1969C65.9521 62.3594 65.5443 62.508 65.1892 62.508Z" fill="white"/>
<path d="M97.1394 62.5081C96.935 62.5081 96.7628 62.4571 96.6273 62.355C96.4852 62.2484 96.3744 62.1123 96.2873 61.9365C96.1904 61.7414 96.1033 61.5145 96.0312 61.2639C95.9526 60.9951 95.8752 60.7104 95.7966 60.4087L93.6157 52.5054C93.5791 52.3636 93.5393 52.2196 93.4995 52.079C93.464 51.9531 93.4328 51.8147 93.4081 51.6684C93.3844 51.5289 93.3726 51.4109 93.3726 51.3213C93.3726 51.1126 93.436 50.9243 93.5673 50.7463C93.6921 50.575 93.846 50.4922 94.0364 50.4922C94.3452 50.4922 94.4539 50.6351 94.5087 50.7429C94.6282 50.9776 94.754 51.3678 94.8853 51.9054L97.1846 60.969L99.4882 51.851C99.5947 51.4279 99.6743 51.1319 99.7259 50.9697C99.7668 50.8438 99.8335 50.7304 99.9304 50.6249C100.012 50.5364 100.128 50.4933 100.288 50.4933C100.402 50.4933 100.505 50.5308 100.603 50.6067C100.704 50.6861 100.781 50.7882 100.84 50.9198C100.898 51.0514 100.926 51.1784 100.926 51.3066C100.926 51.4064 100.915 51.5187 100.893 51.6389C100.871 51.7693 100.842 51.8963 100.807 52.0222C100.77 52.1595 100.732 52.3013 100.693 52.4464L98.4779 60.4053C98.3982 60.7138 98.3197 60.9996 98.2412 61.2718C98.168 61.5247 98.083 61.7493 97.9883 61.9387C97.9033 62.1088 97.7914 62.245 97.6494 62.355C97.5149 62.4559 97.3427 62.5081 97.1394 62.5081Z" fill="white"/>
<path d="M113.438 62.5081C113.332 62.5081 113.243 62.4842 113.174 62.4389C113.1 62.389 113.041 62.3243 112.99 62.2404C112.949 62.1723 112.882 62.0328 112.791 61.7549C112.71 61.5099 112.641 61.2944 112.583 61.1084L112.093 59.3901H108.037L107.546 61.1504C107.344 61.874 107.212 62.1825 107.139 62.313C107.112 62.3617 107.028 62.5092 106.739 62.5092C106.57 62.5092 106.423 62.4264 106.289 62.2563C106.154 62.085 106.088 61.899 106.088 61.6892C106.088 61.5508 106.105 61.4056 106.141 61.257C106.18 61.0858 106.248 60.8442 106.341 60.5379L108.683 52.6211L108.915 51.8305C109.011 51.5039 109.105 51.2555 109.202 51.0627C109.289 50.8903 109.401 50.7542 109.543 50.6464C109.677 50.5455 109.852 50.4933 110.06 50.4933C110.273 50.4933 110.45 50.5443 110.585 50.6464C110.728 50.7542 110.84 50.8891 110.927 51.057C111.024 51.2441 111.107 51.4472 111.174 51.6638C111.246 51.8974 111.337 52.2094 111.449 52.6007L113.842 60.471C114.062 61.1731 114.108 61.5111 114.108 61.6721C114.108 61.8797 114.042 62.068 113.906 62.2483C113.774 62.423 113.622 62.5081 113.438 62.5081ZM108.365 58.1232H111.756L110.044 51.885L108.365 58.1232Z" fill="white"/>
<path d="M126.995 62.508C126.86 62.508 126.736 62.4819 126.63 62.432C126.526 62.3821 126.426 62.3004 126.334 62.1904C126.23 62.0679 126.132 61.9205 126.042 61.7526C125.943 61.5689 125.844 61.3806 125.745 61.1878L121.833 53.2018V61.3874C121.833 61.7798 121.77 62.0713 121.646 62.2539C121.528 62.4275 121.387 62.508 121.201 62.508C121.009 62.508 120.867 62.4275 120.753 62.2539C120.63 62.0679 120.569 61.7764 120.569 61.3874V51.9847C120.569 51.6218 120.598 51.3394 120.654 51.1465C120.714 50.9583 120.815 50.8017 120.96 50.6758C121.105 50.5511 121.255 50.491 121.42 50.491C121.549 50.491 121.659 50.5171 121.745 50.5692C121.837 50.6248 121.916 50.6985 121.986 50.7949C122.064 50.9027 122.148 51.0467 122.232 51.2214C122.326 51.4154 122.423 51.6161 122.522 51.8271L126.525 59.8925V51.6104C126.525 51.2101 126.584 50.9152 126.702 50.7348C126.809 50.5681 126.946 50.491 127.133 50.491C127.329 50.491 127.472 50.5692 127.581 50.736C127.699 50.9174 127.758 51.2112 127.758 51.6104V61.1969C127.759 62.3594 127.352 62.508 126.995 62.508Z" fill="white"/>
<path d="M137.949 62.508C137.095 62.508 136.385 62.2936 135.838 61.8706C135.457 61.5711 135.141 61.164 134.902 60.6604C134.665 60.1636 134.545 59.6781 134.545 59.2176C134.545 58.9919 134.601 58.8048 134.717 58.646C134.829 58.4929 134.963 58.4214 135.14 58.4214C135.274 58.4214 135.38 58.4736 135.471 58.587C135.581 58.7209 135.679 58.9341 135.762 59.2188C135.884 59.6271 136.019 59.973 136.163 60.2509C136.319 60.5503 136.54 60.7999 136.818 60.9927C137.098 61.1855 137.462 61.2831 137.9 61.2831C138.501 61.2831 139.001 61.0891 139.386 60.708C139.786 60.3099 139.989 59.8029 139.989 59.2018C139.989 58.7231 139.875 58.325 139.649 58.0176C139.439 57.7318 139.166 57.5106 138.838 57.3621C138.538 57.226 138.133 57.0808 137.636 56.9288C136.999 56.7303 136.459 56.4955 136.033 56.2312C135.628 55.9806 135.303 55.6358 135.067 55.2059C134.835 54.784 134.718 54.2452 134.718 53.6055C134.718 52.9965 134.844 52.4498 135.091 51.9802C135.339 51.5095 135.706 51.142 136.18 50.8868C136.669 50.6237 137.255 50.491 137.922 50.491C138.454 50.491 138.918 50.5783 139.299 50.7518C139.678 50.9242 139.996 51.1522 140.242 51.4324C140.487 51.7114 140.669 52.0063 140.78 52.3069C140.89 52.6052 140.946 52.8966 140.946 53.1734C140.946 53.3991 140.886 53.5976 140.765 53.7802C140.654 53.9481 140.526 54.0263 140.362 54.0263C140.217 54.0263 140.111 53.9855 140.047 53.9038C139.984 53.8222 139.876 53.6486 139.73 53.2834C139.554 52.798 139.333 52.4033 139.076 52.1186C138.796 51.8089 138.376 51.6581 137.795 51.6581C137.266 51.6581 136.828 51.8203 136.493 52.139C136.139 52.4759 135.961 52.8932 135.961 53.3821C135.961 53.6861 136.025 53.956 136.153 54.1828C136.273 54.3949 136.436 54.5764 136.64 54.725C136.829 54.8634 137.024 54.9723 137.218 55.0494C137.398 55.1231 137.693 55.2275 138.115 55.3692C138.625 55.528 139.087 55.7038 139.496 55.8932C139.891 56.0759 140.23 56.3004 140.503 56.559C140.766 56.8063 140.974 57.125 141.12 57.505C141.268 57.8872 141.343 58.3681 141.343 58.9364C141.343 59.6158 141.21 60.2328 140.949 60.7715C140.688 61.3069 140.301 61.7333 139.795 62.0396C139.287 62.3504 138.664 62.508 137.949 62.508Z" fill="white"/>
</svg>
  </div>
 
  <div class="center-container">
    <p class="footer--content">Copyright &#169; 2023</p>
  
</div>


    </footer>
  );
}

export default Footer;
