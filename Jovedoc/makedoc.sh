#~/bin/bash

jscommonPath="/Users/sohmert/tbd/thunderbolt-common/build"

echo documentation build ${jscommonPath}/application/MenuApi.js -f html -o html
documentation build ${jscommonPath}/application/MenuApi.js -f html -o html
#documentation readme ${jscommonPath}/application/MenuApi.js --readme-file=md/menuAPI.md --markdown-toc=false --section="api"