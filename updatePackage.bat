
@echo off
@echo "updating cli"
call npm uninstall -g @tremho/jove-cli
call npm install -g @tremho/jove-cli
@echo "updating jove modules"
call npm uninstall @tremho/jove-desktop @tremho/jove-common @tremho/jove-cli
call npm install @tremho/jove-desktop @tremho/jove-common
call npm install --save-dev @tremho/jove-cli
@echo "final install"
call npm install
