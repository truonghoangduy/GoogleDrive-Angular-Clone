sudo apt-get update
# sudo apt-get install build-essential curl file git

# sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"


# echo 'export PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin/:$PATH"' >>~/.bashrc
# echo 'export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"' >>~/.bashrc
# echo 'export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"' >>~/.bashrc

# source  ~/.bashrc

mkdir warehouse
mkdir recyclebin

brew install imagemagick
brew install graphicsmagick
# brew install ffmpeg