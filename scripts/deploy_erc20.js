async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MyTokenERC20 = await ethers.getContractFactory("MyTokenERC20");
    const token = await MyTokenERC20.deploy("MyToken", "MTK", 1000000);

    console.log("MyToken ERC-20 deployed to:", token);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });