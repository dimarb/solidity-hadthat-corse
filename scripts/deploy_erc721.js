async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");

    console.log("MyNFT ERC-721 deployed to:", nft);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });
