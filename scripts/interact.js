async function main() {
    const [deployer] = await ethers.getSigners();
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.attach("0x5fbdb2315678afecb367f032d93f642f64180aa3");

    // Establecer un nuevo valor
    await simpleStorage.set(42);
    console.log("New value set to 42");

    // Leer el valor almacenado
    const value = await simpleStorage.get();
    console.log("Stored value is:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });