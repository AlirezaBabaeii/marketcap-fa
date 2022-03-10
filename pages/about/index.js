import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Autocomplete from "../../components/autoserche";
import Styles from "./coin.module.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function index() {
  // const router = useRouter()
  useEffect(() => {
    // console.log(router.query.name);
    // const { pid } = router.query
  }, []);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.detalis}>
        <div className={Styles.up}>
          <div className={Styles.component}>
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  MUI
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/getting-started/installation/"
                >
                  Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
              </Breadcrumbs>
            </div>

            <div className={Styles.logo_namescoin}>
              <Image
                className={Styles.imagelogo}
                src={require("../../assets/solana.png")}
                width={"30px"}
                height={15}
              />
              <h3>Bitcoin</h3>
              <div className={Styles.smlname}>Sol</div>
              <div className={Styles.main_datails}>
                <li className={Styles.detalis_coins}>Rank 8</li>
                <li className={Styles.detalis_coins}>Rank 8</li>
                <li className={Styles.detalis_coins}>Rank 8</li>
              </div>
            </div>
          </div>

          <div className={Styles.component_1}>
            <div className={Styles.pricemain}>
              <li>Btc</li>
              <div className={Styles.price}>
                {" "}
                <span> 3344$ </span> <div> red 11 </div>{" "}
              </div>
              <li>ETH</li>
            </div>

            <div className={Styles.price24h}>
              <div className={Styles.labels}>
                <label>test: 2343$</label>
              </div>
              <div className={Styles.progresbar_body}>
                <div className={Styles.progresbar}></div>
              </div>
              <div className={Styles.labels}>
                <label>test: 2343$</label>
              </div>
            </div>

            <div className={Styles.buy_Sponser}></div>
          </div>
        </div>

        <div className={Styles.dow}>
          <div className={Styles.component_dow}>
            <div className={Styles.menu_datils}>
              <BootstrapTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                    <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                  </React.Fragment>
                }
              >
                <Button className={Styles.btndrop}>
                  Bootstrap
                  <ArrowDownwardIcon className={Styles.icoindrop} />
                </Button>
              </BootstrapTooltip>
            </div>
            <div className={Styles.menu_datils}>
              <BootstrapTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                    <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                  </React.Fragment>
                }
              >
                <Button className={Styles.btndrop}>
                  Bootstrap
                  <ArrowDownwardIcon className={Styles.icoindrop} />
                </Button>
              </BootstrapTooltip>
            </div>
            <div className={Styles.menu_datils}>
              <button className={Styles.btn}>test ev</button>
            </div>
            <div className={Styles.menu_datils}>
              <button className={Styles.btn}>test ev</button>
            </div>
            <div className={Styles.menu_datils}>
              <button className={Styles.btn}>test ev</button>
            </div>
          </div>
          <div className={Styles.component_dow_block}>
            <div className={Styles.block}>
              <li>test</li>
              <li>4837545745</li>
              <li>test</li>
            </div>
            <div className={Styles.block}>
              <li>test</li>
              <li>4837545745</li>
              <li>test</li>
            </div>
            <div className={Styles.block}>
              <li>test</li>
              <li>4837545745</li>
              <li>test</li>
            </div>

            <div className={Styles.block}>
              <li>test</li>
              <li>4837545745</li>
              <div className={Styles.progresbar_body}>
                <div className={Styles.progresbar}></div>
              </div>
              <li>test</li>
              <li>test</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
