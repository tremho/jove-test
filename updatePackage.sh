
echo "updating cli"
npm uninstall -g @tremho/jove-cli
npm install -g @tremho/jove-cli
echo "updating jove modules"
npm uninstall @tremho/jove-desktop @tremho/jove-common @tremho/jove-cli
npm install @tremho/jove-desktop @tremho/jove-common
npm install --save-dev @tremho/jove-cli
echo "final install"
npm install
