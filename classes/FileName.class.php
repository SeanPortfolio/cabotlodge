<?php

class FileName
{

    public $path;
    public $extension;
    public $filename;
    public $directory;
    
    public function getFileExtension()
    {
        $str = preg_match('/[a-zA-Z]{2,3}$/',$this->path,$matches);
        $this->extension = $matches[0];
        return $this->extension ? $this->extension : false;
    }

    public function getFilename() {

        $str = preg_match('/([^\\/]+)\.[a-zA-Z]{2,3}$/',$this->path,$matches);
        $this->filename = $matches[1];
        return $this->filename ? $this->filename : false;
    }

    public function getDirectory() { 

        $str = preg_match('/^(.+)[\\/]/',$this->path,$matches);
        $this->directory = $matches[0];
        return $this->directory ? $this->directory : false;
        
    }
}

?>