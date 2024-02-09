import { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import styles from "./styles/styles.module.css"
import bubu1 from "./assets/1.gif"
import bubu2 from "./assets/2.gif"
import bubu3 from "./assets/3.gif"
import bubu4 from "./assets/4.gif"
import bubu5 from "./assets/5.gif"
import bubu6 from "./assets/6.gif"
import bubu7 from "./assets/7.gif"
import yesImage from "./assets/yes1.gif"

const valentineArray = [
  { text: "Will you be my valentine? ❤️", image: bubu1 },
  { text: "I'll give lablabs if you say yes!", image: bubu2 },
  { text: "I'll throw in hugs too!", image: bubu3 },
  { text: "How about some kisses too?", image: bubu4 },
  { text: "I'll offer cuddles rin!", image: bubu5 },
  { text: "Are you sure?", image: bubu6 },
  { text: "Pretty please?", image: bubu7 },
]

const App = () => {
  const [noCount, setNoCount] = useState<number>(0)
  const [yes, setYes] = useState<boolean>(false)

  const yesHandler = () => {
    setYes(true)
  }

  const noHandler = () => {
    if (noCount < 6) {
      setNoCount((prevNumber: number) => prevNumber + 1)
    } else {
      return
    }
  }

  return (
    <Box className={styles.background}>
      <Box className={styles.container} boxShadow={10}>
        {!yes ? (
          <>
            <img
              src={
                valentineArray?.find((item: any, index: number) => {
                  console.log(item)
                  return index === noCount
                })?.image
              }
              style={{ height: 300 }}
            />
            <Typography variant="h2" textAlign="center" fontWeight={600}>
              {
                valentineArray?.find((item: any, index: number) => {
                  console.log(item)
                  return index === noCount
                })?.text
              }
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                onClick={yesHandler}
                sx={{
                  height: 60 + noCount * 12,
                  width: 180 + noCount * 36,
                  fontSize: 24 + noCount * 3,
                  fontWeight: 600,
                }}
                variant="contained"
                color="success"
              >
                Yes
              </Button>
              {noCount == 6 ? (
                <Button
                  onClick={yesHandler}
                  sx={{
                    height: 60 + noCount * 12,
                    width: 180 + noCount * 36,
                    fontSize: 24 + noCount * 3,
                    fontWeight: 600,
                  }}
                  variant="contained"
                  color="success"
                >
                  Yes
                </Button>
              ) : (
                <Button
                  onClick={noHandler}
                  sx={{ height: 60, width: 150, fontSize: 24, fontWeight: 600 }}
                  variant="text"
                  color="inherit"
                >
                  No
                </Button>
              )}
            </Box>
          </>
        ) : (
          <>
            <img src={yesImage} />
            <Typography
              variant="h2"
              textAlign="center"
              color="initial"
              fontWeight={700}
            >
              Please claim your lablabs and kisses now!
            </Typography>
          </>
        )}
      </Box>
    </Box>
  )
}

export default App
