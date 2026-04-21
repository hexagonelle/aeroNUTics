#!/bin/bash
curseforge="^https://www.curseforge\.com"
modrinth="^https://modrinth\.com"

while read line
do
    echo $line
    if [[ "$line" =~ $curseforge ]]; then 
        MODURL=$line
        MODID=${MODURL##*/}
        #echo "full URL: '$MODURL'"
        #echo "Extracted ID: '$MODID'"
        #echo "ID Length: ${#MODID}"
        packwiz cf install --addon-id $MODID -y
    elif [[ "$line" =~ $modrinth ]]; then 
        echo "adding $line"
        packwiz mr install $line -y
        echo "added $line"
    else 
        echo "invalid url: $line"; 
    fi
done < $1