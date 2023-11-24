import { Center } from "@chakra-ui/react"
import { Image, type ImageProps } from "@/components/Image"

interface AssetDownloadImageProps {
  image: ImageProps["src"]
  alt: string
}

const AssetDownloadImage = ({ image, alt }: AssetDownloadImageProps) => (
  <Center border="1px" borderColor="white700" p={8} w="100%">
    <Image src={image} alt={alt} w="100%" alignSelf="center" />
  </Center>
)

export default AssetDownloadImage
